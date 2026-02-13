"use server";

import { neon } from '@neondatabase/serverless';

// Define the interface so TypeScript knows what we are fetching
export interface ProjectLead {
  id: number;
  project_type: string;
  details: string;
  budget: string;
  email: string;
  created_at: string;
}

export async function saveProjectLead(data: {
  projectType: string;
  details: string;
  budget: string;
  email: string;
}) {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    await sql`
      INSERT INTO project_leads (project_type, details, budget, email)
      VALUES (${data.projectType}, ${data.details}, ${data.budget}, ${data.email})
    `;
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false };
  }
}

export async function getProjectLeads(): Promise<ProjectLead[]> {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    const leads = await sql`SELECT * FROM project_leads ORDER BY created_at DESC`;
    // We cast the result to our ProjectLead interface
    return leads as unknown as ProjectLead[];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}