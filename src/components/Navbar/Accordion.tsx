'use client'

import React, { forwardRef } from 'react'
import * as AccordionBase from '@radix-ui/react-accordion';
import { NavLinksProps } from '@/components/Navbar/NavLinks/NavLinks';
import cn from 'classnames'
import css from './Accordion.module.scss'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AccordionContentProps, AccordionTriggerProps } from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { GetRouteFn, Item } from '@/components/types';
import Link from 'next/link';
import { getRouteForProject, getRouteForSkill } from '@/lib/router';
import Grid from '@/components/UI/Grid/Grid';

type AccordionContentElement = React.ElementRef<typeof CollapsiblePrimitive.Content>;
type AccordionTriggerElement = React.ElementRef<typeof CollapsiblePrimitive.Trigger>;

const Accordion = ({ skills, projects }: NavLinksProps) => {
  return (
    <AccordionBase.Root type={'single'} collapsible>
      {/* Skills */}
      <AccordionBase.Item className={css.AccordionItem} value="skills">
        <AccordionTrigger>Compétences</AccordionTrigger>
        <AccordionContent>
          <Grid cols={2} className={'gap-6'}>
            <Grid item>
              <LinksList items={skills.skillsByType.humanSkills} getRoute={getRouteForSkill} />
            </Grid>
            <Grid item>
              <LinksList items={skills.skillsByType.technicalSkills} getRoute={getRouteForSkill} />
            </Grid>
          </Grid>
        </AccordionContent>
      </AccordionBase.Item>
      {/* Projects */}
      <AccordionBase.Item className={css.AccordionItem} value={'projects'}>
        <AccordionTrigger>Réalisations</AccordionTrigger>
        <AccordionContent>
          <LinksList items={projects} getRoute={getRouteForProject} />
        </AccordionContent>
      </AccordionBase.Item>
    </AccordionBase.Root>
  )
}

const LinksList = ({ items, getRoute }:{items: Item[], getRoute: GetRouteFn}) => {
  return (
    <div className={'flex flex-col gap-4'}>
      {
        items.map((item) => (
          <Link
            key={'link_key_' + item.slug}
            href={getRoute(item)}
          >
            {item.title}
          </Link>
        ))
      }
    </div>
  )
}

const AccordionTrigger = forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
  ({
    children,
    className,
    ...props
  }: AccordionTriggerProps,
  forwardedRef
  ) => (
    <AccordionBase.Header className={css.AccordionHeader}>
      <AccordionBase.Trigger
        className={cn(css.AccordionTrigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={css.AccordionChevron} aria-hidden/>
      </AccordionBase.Trigger>
    </AccordionBase.Header>
  ));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef<AccordionContentElement, AccordionContentProps>(
  ({
    children,
    className,
    ...props
  }: AccordionContentProps,
  forwardedRef
  ) => (
    <AccordionBase.Content
      className={cn(css.AccordionContent, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={css.AccordionContentWrapper}>{children}</div>
    </AccordionBase.Content>
  ));
AccordionContent.displayName = 'AccordionContent';

export default Accordion;
