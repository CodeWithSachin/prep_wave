import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  FINISHED = "FINISHED",
  ACTIVE = "ACTIVE",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus: CallStatus = CallStatus.FINISHED;
  const isSpeaking = true;
  const messages = [
    "What is your name?",
    "My name is Sachin Singh, Nice to meet you.",
  ];
  const lastMessage = messages.at(-1);

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={48}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={65}
              height={48}
              className="object-cover rounded-full size-[120px]"
            />
            {!isSpeaking && <span className="animate-speak" />}

            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        {callStatus === CallStatus.ACTIVE ? (
          <Button className="btn-disconnect">End</Button>
        ) : (
          <Button className="relative btn-call">
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus === CallStatus.CONNECTING ? "" : "hidden"
              )}
            />
            <span>
              {callStatus === CallStatus.CONNECTING ? ". . ." : "Call"}
            </span>
          </Button>
        )}
      </div>
    </>
  );
};

export default Agent;
