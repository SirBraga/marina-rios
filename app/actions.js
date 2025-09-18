"use server";

import { redirect } from "next/navigation";

export async function saveLead(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const business = formData.get("business");

  // Validação básica
  if (!name || !email || !phone) {
    throw new Error("Campos obrigatórios não preenchidos");
  }

  // Placeholder para salvar lead (integrar com banco/CRM)
  console.log("Lead salvo:", { name, email, phone, business });

  redirect("/success");
}

export async function bookCall(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  // Validação básica
  if (!name || !email || !phone) {
    throw new Error("Campos obrigatórios não preenchidos");
  }

  // Placeholder para agendamento (integrar com Calendly/Google Agenda)
  console.log("Pré-diagnóstico agendado:", { name, email, phone });

  redirect("/success");
}