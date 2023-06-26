import React from "react";

const Myaccordian = (props) => {
	return (
		<div className="accordian-body">
			<div className="accordian-body-collapse">
				<div className="accordian-body-inner">
					<div className="accordian-body-root">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default Myaccordian;