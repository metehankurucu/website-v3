import { useState } from "react";

const FORMSPARK_URL = "https://submit-form.com/Hx3Ss6kZ";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    fetch(FORMSPARK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setStatus("sent");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  if (status === "sent") {
    return (
      <div className="py-16 text-center">
        <p className="display-sm">Thank you.</p>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-[var(--font-display)] text-xs text-[var(--muted-foreground)]"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 w-full border-b border-[var(--border-strong)] bg-transparent pb-2 font-[var(--font-display)] text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-[var(--font-display)] text-xs text-[var(--muted-foreground)]"
          >
            Work email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full border-b border-[var(--border-strong)] bg-transparent pb-2 font-[var(--font-display)] text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)]"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block font-[var(--font-display)] text-xs text-[var(--muted-foreground)]"
        >
          What can I help you with? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          className="mt-2 w-full resize-none border-b border-[var(--border-strong)] bg-transparent pb-2 font-[var(--font-display)] text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)]"
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-full bg-[var(--foreground)] px-6 py-2.5 font-[var(--font-display)] text-sm font-medium text-[var(--background)] transition-opacity ${status === "sending" ? "opacity-60" : "hover:opacity-85"}`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <svg
            className="ml-2 inline-block h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-[#b91c1c] dark:text-[#fca5a5]">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
