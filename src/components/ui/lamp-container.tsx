import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "bg-transparent relative flex min-h-[300px] sm:min-h-[400px] flex-col items-center justify-center w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-75 scale-50 sm:scale-y-100 sm:scale-75 -mt-5 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.3, width: "15rem" }}
                    whileInView={{ opacity: 0.6, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    style={{
                        backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#989898] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="bg-background absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="bg-background absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.3, width: "15rem" }}
                    whileInView={{ opacity: 0.6, width: "30rem" }} 
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    style={{
                        backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#989898] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] bg-background" />
                    <div className="absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] bg-background" />
                </motion.div>

                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl" ></div>

                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#989898] opacity-30 blur-3xl"></div> 
                
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-inherit"></div>
            </div>

            <div className="relative z-50 w-full flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};

export default LampContainer;