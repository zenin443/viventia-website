"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Upload, X, ChevronRight, ChevronLeft, Building2, User } from "lucide-react";

/* ─── Types ───────────────────────────────────────────────── */
type ClientType = "individual" | "corporate" | null;
type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
  clientType: ClientType;
  // Individual
  fullName: string; nationality: string; dob: string;
  countryOfResidence: string; passportNumber: string;
  // Corporate
  companyName: string; registrationNumber: string;
  countryOfIncorporation: string; contactPerson: string; jobTitle: string;
  // Shared
  email: string; phone: string;
  // Services
  services: string[];
  propertyBudget: string; propertyType: string; timeline: string;
  // Compliance
  sourceOfFunds: string; sourceOfFundsOther: string;
  isPEP: string; isSanctioned: string; consentData: boolean; consentAML: boolean;
  // Files (names only — actual files handled separately)
  docNames: string[];
}

const INITIAL: FormData = {
  clientType: null,
  fullName: "", nationality: "", dob: "",
  countryOfResidence: "", passportNumber: "",
  companyName: "", registrationNumber: "",
  countryOfIncorporation: "", contactPerson: "", jobTitle: "",
  email: "", phone: "",
  services: [],
  propertyBudget: "", propertyType: "", timeline: "",
  sourceOfFunds: "", sourceOfFundsOther: "",
  isPEP: "", isSanctioned: "", consentData: false, consentAML: false,
  docNames: [],
};

const STEPS = [
  "Client Type", "Your Details", "Service", "Compliance", "Documents", "Review",
];

const SERVICES = [
  { id: "buy", label: "Buy Property", desc: "Acquire residential or commercial assets in Dubai" },
  { id: "sell", label: "Sell Property", desc: "List and sell your Dubai property to qualified buyers" },
  { id: "manage", label: "Property Management", desc: "Full-service management — tenants, maintenance, rent" },
  { id: "list", label: "List for Rent", desc: "Market your property and place the right tenants" },
];

const SOURCE_OPTIONS = [
  "Employment / Salary Income",
  "Business / Company Income",
  "Investment Returns",
  "Inheritance / Gift",
  "Property Sale Proceeds",
  "Other (please specify)",
];

/* ─── Styles ──────────────────────────────────────────────── */
const S = {
  input: {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px",
    padding: "13px 16px", color: "#F5F0E8",
    fontFamily: "'Raleway', sans-serif", fontSize: "14px",
    outline: "none", transition: "border-color 0.2s",
  } as React.CSSProperties,
  label: {
    fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700,
    color: "rgba(201,168,76,0.8)", letterSpacing: "2px",
    textTransform: "uppercase" as const, marginBottom: "8px", display: "block",
  },
  section: { marginBottom: "28px" } as React.CSSProperties,
};

/* ─── Field component ─────────────────────────────────────── */
function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div style={S.section}>
      <label style={S.label}>{label}{required && <span style={{ color: "#c9a84c" }}> *</span>}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <input
      type={type} value={value} placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      style={S.input}
      onFocus={e => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
    />
  );
}

function Select({ value, onChange, options, placeholder }: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder?: string;
}) {
  return (
    <select
      value={value} onChange={e => onChange(e.target.value)}
      style={{ ...S.input, cursor: "pointer" }}
      onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = "rgba(201,168,76,0.5)"; }}
      onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      <option value="" disabled>{placeholder || "Select..."}</option>
      {options.map(o => <option key={o} value={o} style={{ background: "#0c0f18" }}>{o}</option>)}
    </select>
  );
}

/* ─── Progress bar ────────────────────────────────────────── */
function ProgressBar({ step }: { step: Step }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: i + 1 < step ? "#C9A84C" : i + 1 === step ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.05)",
              border: i + 1 <= step ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", fontWeight: 700, color: i + 1 <= step ? "#C9A84C" : "rgba(255,255,255,0.3)",
              fontFamily: "'Raleway', sans-serif",
            }}>
              {i + 1 < step ? <CheckCircle size={14} /> : i + 1}
            </div>
            <span style={{
              fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 600,
              letterSpacing: "1px", textTransform: "uppercase",
              color: i + 1 === step ? "#C9A84C" : "rgba(255,255,255,0.25)",
              marginTop: "6px", textAlign: "center",
            }}>{s}</span>
          </div>
        ))}
      </div>
      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
        <div style={{
          height: "100%", borderRadius: "2px",
          background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.4))",
          width: `${((step - 1) / (STEPS.length - 1)) * 100}%`,
          transition: "width 0.4s ease",
        }} />
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof FormData, val: unknown) =>
    setForm(f => ({ ...f, [key]: val }));

  const toggleService = (id: string) => {
    const cur = form.services;
    set("services", cur.includes(id) ? cur.filter(s => s !== id) : [...cur, id]);
  };

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const arr = Array.from(newFiles).slice(0, 5 - files.length);
    setFiles(f => [...f, ...arr]);
    set("docNames", [...form.docNames, ...arr.map(f => f.name)]);
  };

  const removeFile = (i: number) => {
    setFiles(f => f.filter((_, idx) => idx !== i));
    set("docNames", form.docNames.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const body = new FormData();
      body.append("data", JSON.stringify(form));
      files.forEach((f, i) => body.append(`file_${i}`, f));
      const res = await fetch("/api/onboarding", { method: "POST", body });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at info@viventiarealtysolutions.com");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <SuccessScreen />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", padding: "0 0 80px" }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        padding: "24px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "14px" }}>
          <VLogo />
          <div>
            <div style={{ fontFamily: "'Copperplate Gothic Light', Copperplate, serif", fontSize: "15px", color: "#F5F0E8", letterSpacing: "3.5px" }}>VIVENTIA</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "2.5px", textTransform: "uppercase" }}>REALTY SOLUTIONS</div>
          </div>
        </a>
        <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(245,240,232,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>
          CLIENT ONBOARDING
        </div>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 32px 0" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9A84C", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px" }}>
            SECURE ONBOARDING
          </div>
          <h1 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 200, fontSize: "clamp(28px,4vw,42px)", color: "#F5F0E8", letterSpacing: "6px", textTransform: "uppercase", lineHeight: 1.2 }}>
            Start Your Journey
          </h1>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.45)", marginTop: "14px", lineHeight: 1.7 }}>
            Complete this form to begin your property journey with Viventia.<br />All information is handled with strict confidentiality under UAE PDPL.
          </p>
        </div>

        <ProgressBar step={step} />

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {step === 1 && <StepClientType form={form} set={set} />}
            {step === 2 && <StepDetails form={form} set={set} />}
            {step === 3 && <StepService form={form} toggleService={toggleService} set={set} />}
            {step === 4 && <StepCompliance form={form} set={set} />}
            {step === 5 && <StepDocuments files={files} fileRef={fileRef} addFiles={addFiles} removeFile={removeFile} />}
            {step === 6 && <StepReview form={form} files={files} />}
          </motion.div>
        </AnimatePresence>

        {/* Error */}
        {error && (
          <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(220,50,50,0.08)", border: "1px solid rgba(220,50,50,0.25)", borderRadius: "8px", fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#f87171" }}>
            {error}
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {step > 1 ? (
            <button onClick={() => setStep(s => (s - 1) as Step)}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", padding: "13px 24px", color: "rgba(245,240,232,0.6)", fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.4)"; (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,240,232,0.6)"; }}>
              <ChevronLeft size={15} /> Back
            </button>
          ) : <div />}

          {step < 6 ? (
            <button
              onClick={() => setStep(s => (s + 1) as Step)}
              disabled={step === 1 && !form.clientType}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "#C9A84C", border: "none", borderRadius: "8px", padding: "13px 32px", color: "#07090F", fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", opacity: (step === 1 && !form.clientType) ? 0.4 : 1 }}>
              Continue <ChevronRight size={15} />
            </button>
          ) : (
            <button
              onClick={handleSubmit} disabled={submitting || !form.consentData || !form.consentAML}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: submitting ? "rgba(201,168,76,0.5)" : "#C9A84C", border: "none", borderRadius: "8px", padding: "13px 32px", color: "#07090F", fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", cursor: submitting ? "wait" : "pointer", opacity: (!form.consentData || !form.consentAML) ? 0.4 : 1 }}>
              {submitting ? "Submitting..." : "Submit Application"} {!submitting && <ChevronRight size={15} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: Client Type ─────────────────────────────────── */
function StepClientType({ form, set }: { form: FormData; set: (k: keyof FormData, v: unknown) => void }) {
  return (
    <div>
      <StepHeader title="Who are you?" subtitle="Select your client type to tailor the onboarding process." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "32px" }}>
        {[
          { type: "individual" as const, Icon: User, title: "Individual", desc: "Personal investment or property ownership" },
          { type: "corporate" as const, Icon: Building2, title: "Corporate / Entity", desc: "Company, trust, family office, or fund" },
        ].map(({ type, Icon, title, desc }) => (
          <button key={type} onClick={() => set("clientType", type)} style={{
            background: form.clientType === type ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.02)",
            border: `1px solid ${form.clientType === type ? "#C9A84C" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "14px", padding: "28px 24px", cursor: "pointer",
            textAlign: "left", transition: "all 0.2s", display: "flex", flexDirection: "column", gap: "14px",
          }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C" }}>
              <Icon size={20} />
            </div>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", fontWeight: 700, color: "#F5F0E8", letterSpacing: "1px", marginBottom: "6px" }}>{title}</div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12.5px", color: "rgba(245,240,232,0.45)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Step 2: Details ─────────────────────────────────────── */
function StepDetails({ form, set }: { form: FormData; set: (k: keyof FormData, v: unknown) => void }) {
  return (
    <div>
      <StepHeader title={form.clientType === "individual" ? "Personal Details" : "Company Details"} subtitle="All fields marked * are required for KYC compliance." />
      <div style={{ marginTop: "32px" }}>
        {form.clientType === "individual" ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <Field label="Full Legal Name" required><Input value={form.fullName} onChange={v => set("fullName", v)} placeholder="As per passport" /></Field>
              <Field label="Nationality" required><Input value={form.nationality} onChange={v => set("nationality", v)} placeholder="e.g. British" /></Field>
              <Field label="Date of Birth" required><Input type="date" value={form.dob} onChange={v => set("dob", v)} /></Field>
              <Field label="Country of Residence" required><Input value={form.countryOfResidence} onChange={v => set("countryOfResidence", v)} placeholder="e.g. United Kingdom" /></Field>
              <Field label="Passport Number" required><Input value={form.passportNumber} onChange={v => set("passportNumber", v)} placeholder="e.g. GB123456789" /></Field>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <Field label="Company Name" required><Input value={form.companyName} onChange={v => set("companyName", v)} placeholder="Registered legal name" /></Field>
              <Field label="Registration Number" required><Input value={form.registrationNumber} onChange={v => set("registrationNumber", v)} placeholder="e.g. 12345678" /></Field>
              <Field label="Country of Incorporation" required><Input value={form.countryOfIncorporation} onChange={v => set("countryOfIncorporation", v)} placeholder="e.g. United Arab Emirates" /></Field>
              <Field label="Contact Person" required><Input value={form.contactPerson} onChange={v => set("contactPerson", v)} placeholder="Full name" /></Field>
              <Field label="Job Title" required><Input value={form.jobTitle} onChange={v => set("jobTitle", v)} placeholder="e.g. Director" /></Field>
            </div>
          </>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "4px" }}>
          <Field label="Email Address" required><Input type="email" value={form.email} onChange={v => set("email", v)} placeholder="your@email.com" /></Field>
          <Field label="Phone Number" required><Input type="tel" value={form.phone} onChange={v => set("phone", v)} placeholder="+44 7700 000000" /></Field>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Service ─────────────────────────────────────── */
function StepService({ form, toggleService, set }: { form: FormData; toggleService: (id: string) => void; set: (k: keyof FormData, v: unknown) => void }) {
  return (
    <div>
      <StepHeader title="How can we help?" subtitle="Select all services that apply. You can add more later." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "32px" }}>
        {SERVICES.map(s => (
          <button key={s.id} onClick={() => toggleService(s.id)} style={{
            background: form.services.includes(s.id) ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.02)",
            border: `1px solid ${form.services.includes(s.id) ? "#C9A84C" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "12px", padding: "20px", cursor: "pointer", textAlign: "left", transition: "all 0.2s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <div style={{ width: "18px", height: "18px", borderRadius: "4px", border: `1.5px solid ${form.services.includes(s.id) ? "#C9A84C" : "rgba(255,255,255,0.2)"}`, background: form.services.includes(s.id) ? "#C9A84C" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {form.services.includes(s.id) && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#07090F" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>}
              </div>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F5F0E8", letterSpacing: "0.5px" }}>{s.label}</span>
            </div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.4)", lineHeight: 1.6, paddingLeft: "28px" }}>{s.desc}</div>
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "28px" }}>
        <Field label="Approx. Budget / Value">
          <Select value={form.propertyBudget} onChange={v => set("propertyBudget", v)} placeholder="Select range"
            options={["Under AED 1M", "AED 1M – 3M", "AED 3M – 10M", "AED 10M – 30M", "AED 30M+"]} />
        </Field>
        <Field label="Property Type">
          <Select value={form.propertyType} onChange={v => set("propertyType", v)} placeholder="Select type"
            options={["Apartment", "Villa / Townhouse", "Penthouse", "Commercial", "Off-Plan", "Portfolio"]} />
        </Field>
        <Field label="Timeline">
          <Select value={form.timeline} onChange={v => set("timeline", v)} placeholder="Select timeline"
            options={["ASAP", "1–3 months", "3–6 months", "6–12 months", "Flexible"]} />
        </Field>
      </div>
    </div>
  );
}

/* ─── Step 4: Compliance ──────────────────────────────────── */
function StepCompliance({ form, set }: { form: FormData; set: (k: keyof FormData, v: unknown) => void }) {
  return (
    <div>
      <StepHeader title="Compliance Declarations" subtitle="Required under UAE Federal Decree-Law No. 20 of 2018 (AML/CFT)." />
      <div style={{ marginTop: "32px" }}>
        <Field label="Source of Funds" required>
          <Select value={form.sourceOfFunds} onChange={v => set("sourceOfFunds", v)} placeholder="Select primary source"
            options={SOURCE_OPTIONS} />
        </Field>
        {form.sourceOfFunds === "Other (please specify)" && (
          <Field label="Please Specify"><Input value={form.sourceOfFundsOther} onChange={v => set("sourceOfFundsOther", v)} placeholder="Describe your source of funds" /></Field>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <Field label="Are you a Politically Exposed Person (PEP)?" required>
            <Select value={form.isPEP} onChange={v => set("isPEP", v)} placeholder="Select"
              options={["No", "Yes — Current or former public official", "Yes — Family member or close associate of PEP"]} />
          </Field>
          <Field label="Are you subject to any international sanctions?" required>
            <Select value={form.isSanctioned} onChange={v => set("isSanctioned", v)} placeholder="Select"
              options={["No", "Yes (provide details in document section)"]} />
          </Field>
        </div>

        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { key: "consentData" as const, text: "I consent to Viventia Realty Solutions collecting and processing my personal data for onboarding and client management purposes under UAE PDPL (Federal Decree-Law No. 45 of 2021)." },
            { key: "consentAML" as const, text: "I confirm that all information provided is accurate and complete. I understand that Viventia Realty Solutions is required to conduct due diligence under UAE AML/CFT law and may request additional documentation." },
          ].map(({ key, text }) => (
            <label key={key} style={{ display: "flex", gap: "14px", cursor: "pointer", padding: "16px 18px", background: "rgba(255,255,255,0.02)", border: `1px solid ${form[key] ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: "10px", transition: "border-color 0.2s" }}>
              <div
                onClick={() => set(key, !form[key])}
                style={{ width: "20px", height: "20px", borderRadius: "5px", border: `1.5px solid ${form[key] ? "#C9A84C" : "rgba(255,255,255,0.2)"}`, background: form[key] ? "#C9A84C" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", cursor: "pointer", transition: "all 0.2s" }}>
                {form[key] && <svg width="11" height="9" viewBox="0 0 11 9"><path d="M1 4.5l3 3 6-7" stroke="#07090F" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>}
              </div>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12.5px", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>{text}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5: Documents ───────────────────────────────────── */
function StepDocuments({ files, fileRef, addFiles, removeFile }: {
  files: File[]; fileRef: React.RefObject<HTMLInputElement | null>;
  addFiles: (f: FileList | null) => void; removeFile: (i: number) => void;
}) {
  const [dragging, setDragging] = useState(false);
  return (
    <div>
      <StepHeader title="Supporting Documents" subtitle="Upload passport, proof of address, and any relevant documents. Max 5 files, 10MB each." />
      <div style={{ marginTop: "32px" }}>
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
          onClick={() => fileRef.current?.click()}
          style={{
            border: `2px dashed ${dragging ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
            borderRadius: "14px", padding: "48px 32px", textAlign: "center",
            cursor: "pointer", transition: "all 0.2s",
            background: dragging ? "rgba(201,168,76,0.04)" : "rgba(255,255,255,0.015)",
          }}>
          <Upload size={28} color="#C9A84C" style={{ margin: "0 auto 16px", opacity: 0.7 }} />
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", fontWeight: 600, color: "#F5F0E8", marginBottom: "6px" }}>
            Drag & drop or click to upload
          </div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.35)" }}>
            Passport · Proof of Address · Company Documents · Bank Statement
          </div>
          <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            style={{ display: "none" }} onChange={e => addFiles(e.target.files)} />
        </div>

        {files.length > 0 && (
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {files.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C9A84C" }} />
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#F5F0E8" }}>{f.name}</span>
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", color: "rgba(245,240,232,0.35)" }}>({(f.size / 1024).toFixed(0)} KB)</span>
                </div>
                <button onClick={() => removeFile(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(245,240,232,0.4)", padding: "4px" }}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "20px", padding: "14px 18px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "8px" }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "6px" }}>Document Checklist</div>
          {["Valid passport or Emirates ID (mandatory)", "Proof of address dated within 3 months", "Source of funds evidence (bank statement / payslip)", "Corporate: Certificate of Incorporation + MOA", "Corporate: UBO declaration if applicable"].map(item => (
            <div key={item} style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.45)", lineHeight: "1.9" }}>· {item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 6: Review ──────────────────────────────────────── */
function StepReview({ form, files }: { form: FormData; files: File[] }) {
  const rows: [string, string][] = [
    ["Client Type", form.clientType === "individual" ? "Individual" : "Corporate / Entity"],
    ...(form.clientType === "individual"
      ? [["Full Name", form.fullName], ["Nationality", form.nationality], ["Date of Birth", form.dob], ["Country of Residence", form.countryOfResidence], ["Passport Number", form.passportNumber]] as [string, string][]
      : [["Company Name", form.companyName], ["Registration Number", form.registrationNumber], ["Country of Incorporation", form.countryOfIncorporation], ["Contact Person", form.contactPerson], ["Job Title", form.jobTitle]] as [string, string][]),
    ["Email", form.email], ["Phone", form.phone],
    ["Services Required", form.services.join(", ") || "—"],
    ["Budget / Value", form.propertyBudget || "—"],
    ["Property Type", form.propertyType || "—"],
    ["Timeline", form.timeline || "—"],
    ["Source of Funds", form.sourceOfFunds || "—"],
    ["PEP Declaration", form.isPEP || "—"],
    ["Sanctions Declaration", form.isSanctioned || "—"],
    ["Documents", files.length > 0 ? files.map(f => f.name).join(", ") : "None uploaded"],
  ];
  return (
    <div>
      <StepHeader title="Review your application" subtitle="Please verify all details before submitting. Both declarations must be accepted to proceed." />
      <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "0", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", overflow: "hidden" }}>
        {rows.map(([label, value], i) => (
          <div key={label} style={{ display: "grid", gridTemplateColumns: "180px 1fr", padding: "13px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: value === "—" ? "rgba(245,240,232,0.25)" : "#F5F0E8" }}>{value || "—"}</span>
          </div>
        ))}
      </div>
      {(!form.consentData || !form.consentAML) && (
        <div style={{ marginTop: "16px", padding: "12px 16px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(201,168,76,0.8)" }}>
          ⚠ Please go back to Step 4 and accept both compliance declarations before submitting.
        </div>
      )}
    </div>
  );
}

/* ─── Success screen ──────────────────────────────────────── */
function SuccessScreen() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ textAlign: "center", maxWidth: "520px" }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", color: "#C9A84C" }}>
          <CheckCircle size={32} />
        </div>
        <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 200, fontSize: "36px", color: "#F5F0E8", letterSpacing: "6px", textTransform: "uppercase", marginBottom: "16px" }}>Application Received</h2>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.5)", lineHeight: 1.8, marginBottom: "36px" }}>
          Thank you for choosing Viventia Realty Solutions. Our team will review your application and contact you within <strong style={{ color: "#C9A84C" }}>1 business day</strong>.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", borderRadius: "8px", padding: "14px 32px", textDecoration: "none", color: "#07090F", fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
          Return to Website
        </a>
      </motion.div>
    </div>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */
function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "26px", color: "#F5F0E8", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>{title}</h2>
      <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.4)", lineHeight: 1.6 }}>{subtitle}</p>
    </div>
  );
}

function VLogo() {
  return (
    <svg viewBox="0 0 40 44" width="28" height="30">
      <line x1="2.8" y1="2.4" x2="20" y2="38" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="37.2" y1="2.4" x2="20" y2="38" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9.2" y1="2.4" x2="20" y2="34" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <line x1="30.8" y1="2.4" x2="20" y2="34" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <line x1="0" y1="2.4" x2="9.2" y2="2.4" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="30.8" y1="2.4" x2="40" y2="2.4" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="20,40.5 22.2,36.3 20,32.2 17.8,36.3" fill="#C9A84C" />
    </svg>
  );
}
