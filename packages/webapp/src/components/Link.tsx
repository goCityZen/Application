// @ts-nocheck
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import clsx from 'clsx'
import { useRouter } from 'next/router';
import NextLink from 'next/link';


/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
interface Props extends React.FC {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);



const NextComposed = React.forwardRef((props, ref) => {

  const { as, href, children, ...other } = props;
  const classes = useStyles();
  return (
    <NextLink href={href} as={as}>
      <a className={classes} ref={ref} {...other}>{children ? children : null}</a>
    </NextLink>
  );
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: Props) {

  // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  // const className = clsx(classNameProps, {
  //   [activeClassName]: router.pathname === pathname && activeClassName,
  // }, classes);

  // if (naked) {
  //   return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  // }

  return (
    <MuiLink component={NextComposed} ref={innerRef} href={href} {...other} />
  );
}


export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />);
