import React, { useEffect } from "react"
import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import { SpacingPaper } from "~/components"
import { HeaderArticleContainer } from "~/components"
import { Layout } from "~/templates"
import { Page } from "~/constants"


const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {},
    })
)

type Props = {}

function NotFoundError(props: Props) {
    const classes = useStyles(props)


    useEffect(() => {
        // changePage(Page.ERROR)
    }, [])

    return (
        <Layout className={classes.root}>
            <HeaderArticleContainer>
                <SpacingPaper>
                    <Typography variant="h5">404 Page NotFound :(</Typography>
                </SpacingPaper>
            </HeaderArticleContainer>
        </Layout>
    )
}

export default NotFoundError