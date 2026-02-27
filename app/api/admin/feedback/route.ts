import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

// Use service role for admin access (bypasses RLS)
function createAdminClient() {
  const supabaseUrl = process.env.SUPABASE_URL!
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, serviceRoleKey)
}

// Simple password protection for admin
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "definedle-admin-2024"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const password = searchParams.get("password")

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = createAdminClient()

    // Get all feedback, newest first
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100)

    if (error) {
      console.error("Error fetching feedback:", error)
      return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 })
    }

    return NextResponse.json({ feedback: data })
  } catch (error) {
    console.error("Admin feedback error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Delete feedback item
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const password = searchParams.get("password")
    const id = searchParams.get("id")

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!id) {
      return NextResponse.json({ error: "Missing feedback ID" }, { status: 400 })
    }

    const supabase = createAdminClient()

    const { error } = await supabase
      .from("feedback")
      .delete()
      .eq("id", id)

    if (error) {
      console.error("Error deleting feedback:", error)
      return NextResponse.json({ error: "Failed to delete feedback" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Admin delete error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
