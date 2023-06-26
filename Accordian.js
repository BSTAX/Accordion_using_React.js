import React, { useState } from "react";
import Myaccordian from "./Myaccordian";
import AccordionSummary from "./AccordionSummary";
import "./accordian.css";

const Accordian = ({
	defaultExpanded = false,
	summary = "Your Title Here",
	details = "Your content Here",
}) => {
	const [expandedState, setExpandedState] = useState(defaultExpanded);
	return (
		<div className={`accordian accordian-expand-${expandedState}`}>
			<AccordionSummary
				onClick={() => {
					setExpandedState(!expandedState);
				}}
			>
				{summary}
			</AccordionSummary>
			<Myaccordian>{details}</Myaccordian>
		</div>
	);
};

export default Accordian;