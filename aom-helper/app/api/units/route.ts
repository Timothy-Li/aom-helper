import { NextResponse } from "next/server"

export async function GET() {
  const apiBaseUrl = process.env.API_BASE_URL

  try {
    const response = await fetch(`${apiBaseUrl}/units`, {
    })

    if (!response.ok) {
      throw new Error("Failed to fetch units")
    }

    const units = await response.json()

    if (!Array.isArray(units) || units.length === 0) {
      return NextResponse.json([], { status: 200 })
    }

    return NextResponse.json(units)
  } catch (error) {
    console.error("Error fetching units:", error)
    return NextResponse.json({ error: "Failed to fetch units" }, { status: 500 })
  }
}

