import {
  Anchor,
  Box,
  Nav,
  Text,
} from 'grommet';
import { Vulnerability } from 'grommet-icons'

import { links } from './links';

import * as AppTypes from 'Types/app';

/**
 * NavigationBar creates a Navigation Banner for links to pages of site
 * @return {JSX.Element}
 * @function
 */
export default function NavigationBar(): JSX.Element {

  return (
    <Nav
      direction="row"
      background="brand"
      pad="medium"
      width="100%"
      justify="center"
      align="center"
    >
      <Vulnerability id="nav-logo" color="black" size="large" />
      <Text
        id="nav-title"
        size="xl"
      >
        Job Application Tracker
      </Text>
      <Box
        fill
        align="center"
        justify="around"
        direction="row"
        id="nav-links-container"
      >
        {
          links.map((link: AppTypes.NavLink) => (
              <Anchor
                key={link.key}
                id={link.name}
                href={link.href}
                label={link.label}
              />
          ))
        }
      </Box>
    </Nav>
  );
}
