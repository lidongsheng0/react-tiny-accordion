import React from 'react'
import { action } from '@storybook/addon-actions';
import Accordion, { AccordionItem } from '../../src'
import '../simple.css'

export default () => (
  <Accordion className="accordion" onChange={action('onChange')}>
    <AccordionItem header="🎹 Piano" className="inner">
      <p>First item content</p>
      <p>The piano (a clipping of earlier pianoforte) is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700 (the exact year is uncertain), in which the strings are struck by hammers.</p>
    </AccordionItem>
    <AccordionItem header="🎸 Guitar" className="inner">
      <p>Second item content</p>
      <p>The guitar is a fretted musical instrument that usually has six strings. It is typically played with both hands by strumming or plucking the strings with either a guitar pick or the finger(s)/fingernails of one hand, while simultaneously fretting (pressing the strings against the frets) with the fingers of the other hand.</p>
    </AccordionItem>
  </Accordion>
)

export const docs =
`<Accordion>
  <AccordionItem header="🎹 Piano">
    <p>First item content</p>
    <p>The piano...</p>
  </AccordionItem>
  <AccordionItem header="🎸 Guitar">
    <p>Second item content</p>
    <p>The guitar...</p>
  </AccordionItem>
</Accordion>`
