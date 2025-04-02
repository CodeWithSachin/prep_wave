"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function getInterviewByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interview = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();
  return interview.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  const interview = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("userId", "!=", userId)
    .limit(limit)
    .get();
  return interview.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
