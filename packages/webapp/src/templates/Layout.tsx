
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Head from "next/head"
import * as React from "react"

import { ResponsiveDrawer } from "~/components"

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            height: "100%",
        },
    })
)

type Props = {
    children: React.ReactNode
    className?: string
}

export const Layout = function (props: Props) {
    const { children, className } = props
    const classes = useStyles(props)

    return (
        <section className={`${classes.root} ${className}`}>
            <Head>
                <title>{ }</title>
            </Head>
            <ResponsiveDrawer>
                <article>{children}</article>
            </ResponsiveDrawer>
        </section>
    )
}