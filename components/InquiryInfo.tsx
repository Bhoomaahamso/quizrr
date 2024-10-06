import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

function InquiryInfo() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-[480px_1fr] max-w-5xl" id="institute">
        <div className="px-5">
          <div className="">
            <h1 className="text-[44px] font-semibold leading-[52px] mb-4">
              Need the{" "}
              <span className="text-[#335eea]"> Most Relevant & Advanced</span>{" "}
              test series for your Institute?
            </h1>
            <p className="text-xl text-[#161c2d] font-normal mb-12">
              Now use Quizrr Testing Platform - which is popular among students
              nationwide for its relevant & comprehensive content along with the
              <span className="text-[#335eea]">
                {" "}
                Most Detailed Analytical Platform
              </span>
              .
            </p>
          </div>
          <div className="">
            <Button className="px-5 py-6 bg-[#2b50c7] transition-all hover:bg-[#294bbb] hover:-translate-y-2">
              Fill the Inquiry Form{" "}
              <span className="ml-4">
                <ArrowRight color="#ffffff" />
              </span>
            </Button>
          </div>
        </div>
        <div className="px-5">
          <Image
            width={624}
            height={413}
            alt="coolaborate"
            src={
              "https://www.mathongo.com/public/lk/assets/img/illustrations/illustration-2.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
export default InquiryInfo;
