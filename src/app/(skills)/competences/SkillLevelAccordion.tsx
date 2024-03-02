'use client'

import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionBase from '@radix-ui/react-accordion';
import React from 'react';
import css from './SkillLevelAccordion.module.scss';

const SkillLevelAccordion = () => {
  return (
    <AccordionBase.Root type={'single'} collapsible className={css.AccordionRoot}>
      {/* Skills */}
      <AccordionBase.Item className={css.AccordionItem} value="skillLevels">
        <AccordionBase.Header className={css.AccordionHeader}>
          <AccordionBase.Trigger className={css.AccordionTrigger}>
            Niveaux de compétences
            <ChevronDownIcon className={css.AccordionChevron} aria-hidden/>
          </AccordionBase.Trigger>
        </AccordionBase.Header>
        <AccordionBase.Content className={css.AccordionContent}>
          <div className={'flex flex-col gap-6'}>
            <div className={'flex flex-col gap-1'}>
              <h3 className={'font-semibold'}>Initié</h3>
              <p>Compétence pour laquelle j’ai acquis les notions de base qui me permettent d’avoir une vision globale
                du sujet, sans être en capacité d’utiliser cette compétence de manière professionnelle au quotidien.</p>
            </div>
            <div className={'flex flex-col gap-1'}>
              <h3 className={'font-semibold'}>Intermédiaire</h3>
              <p>Compétence dans laquelle j’ai des connaissances solides me permettant de
                l’utiliser au quotidien, sans pour autant me considérer comme étant expert.</p>
            </div>
            <div className={'flex flex-col gap-1'}>
              <h3 className={'font-semibold'}>Professionnel</h3>
              <p>Compétence pour laquelle j’ai acquis assez de connaissances et
                d’expériences pour prétendre être à l’aise avec son fonctionnement. Je peux appliquer cette compétence
                au quotidien, dans mon travail, ou sur des projets personnels.</p>
            </div>
          </div>
        </AccordionBase.Content>
      </AccordionBase.Item>
    </AccordionBase.Root>
  )
}

export default SkillLevelAccordion;
