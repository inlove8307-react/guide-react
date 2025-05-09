import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxList.css";

const UxList = (props) => {
	const originClassName = "ux-list";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxList;