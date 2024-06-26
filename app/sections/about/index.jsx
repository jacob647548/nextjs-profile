"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Jacob a fullstack and blockchain developer with extensive experience of
							building and maintaing blockchain based applications.
						</p>
						<p>Proficient in both frontend and backend technologies.</p>
						<p>
							With my skills in languages like JavaScript, Python, and frameworks such as React,
							Django, and Express.js, I've successfully delivered robust and scalable applications.
						</p>
						<div className="my-3.5">
							<p>
								Enthusiastic about innovative protocols like Bitcoin Ordinals, Runes Protocol, and
								PSBT.
							</p>
							<p>
								Proficient in deploying diverse DeFi ventures, from Decentralized Exchanges to Yield
								Farming platforms.
							</p>
							<p>
								Skilled in Solidity, JavaScript, and Python, with a deep understanding of blockchain
								platforms such as Ethereum, Hyperledger, and Corda.
							</p>
						</div>
						<div className="my-3.5">
							<p>
								Outside of work I keep myself fit and active: doing exercise, watching movies,
								playing computer games ...
							</p>
							<p>I always take my responsibility of my own professional development.</p>
						</div>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
