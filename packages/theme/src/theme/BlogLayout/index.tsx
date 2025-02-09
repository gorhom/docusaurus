/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from "react";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import styles from "./styles.module.css";

import type { Props } from "@theme/BlogLayout";

export default function BlogLayout(props: Props): ReactNode {
	const { sidebar, toc, children, ...layoutProps } = props;
	const hasSidebar = sidebar && sidebar.items.length > 0;

	return (
		<Layout {...layoutProps}>
			<div className="container padding-top--md padding-bottom--lg padding-horiz--none">
				<div className={styles.blogContainer}>
					<BlogSidebar sidebar={sidebar} />
					<main className={styles.blogContentContainer}>{children}</main>
					{toc && <div className={styles.tocContainer}>{toc}</div>}
				</div>
			</div>
		</Layout>
	);
}
