import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Heading1 from './headings/headings';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Headings', module)
    .add('Heading 1', () => <Heading1></Heading1>)
    .add('Heading 2', () => <h2>Heading 2</h2>);

storiesOf('Paragraphs', module)
    .add('Default paragraph', () => <p>Default paragraph</p>)
    .add('Intro paragraph', () => <p class="paragraph__intro">Intro paragraph</p>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with text and emoji', () => <Button onClick={action('clicked')}>Hello Button 😀 😎 👍 💯</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

