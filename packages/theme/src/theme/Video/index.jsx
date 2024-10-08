import React from "react";

export default function Video({ title, url }) {
	return (
		<video
			muted={true}
			loop={true}
			autoPlay={true}
			controls={false}
			playsInline={true}
			title={title}
			width="100%"
		>
			<source src={url} type="video/mp4" />
		</video>
	);
}
