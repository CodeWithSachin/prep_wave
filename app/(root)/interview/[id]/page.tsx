import { getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcon from "@/components/root/DisplayTechIcon";
import Agent from "@/components/interview/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewById(id);

  if (!interview) redirect("/");
  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-10"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>
          <DisplayTechIcon techStack={interview.techstack} />
        </div>
        <p className="bg-dark-200 capitalize h-fit px-4 py-2 rounded-lg">
          {interview.type}
        </p>
      </div>
      <Agent
        userName={user?.name}
        type="interview"
        interviewId={id}
        userId={user?.id}
        questions={interview.questions}
      />
    </>
  );
};

export default page;
