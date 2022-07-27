<template>
  <header class="RNav">
    <RLogo height="70%" />
    <RMenuBar :menuBarConfig="menuBarConfig" />
    <RToolBar />
  </header>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Icon } from '@iconify/vue'
import type { NavItem } from '../../types/nav'
import RLogo from '../RLogo.vue'
import RMenuBar from './RMenuBar.vue'
import RToolBar from './RToolBar.vue'

const menuBarConfig: NavItem[] = [
  {
    text: 'File',
    children: [
      {
        text: 'group test 1',
        toggle: true,
        icon: h(Icon, {
          icon: 'bi:check-lg'
        }),
        onClick: () => {}
      },
      {
        text: 'group test 2',
        onClick: () => {}
      },
      {
        text: 'group test 3',
        onClick: () => {}
      }
    ]
  },
  {
    text: 'Edit',
    onClick: () => {}
  },
  {
    text: 'View',
    children: [
      {
        text: 'Theme Mode',
        radioOption: {
          limit: 1
        },
        items: [
          {
            text: 'Light',
            toggle: true,
            icon: h(Icon, {
              icon: 'bi:check-lg'
            }),
            onClick: () => {}
          },
          {
            text: 'Dark',
            onClick: () => {}
          },
          {
            text: 'Auto',
            onClick: () => {}
          }
        ]
      }
    ]
  },
  {
    text: 'Help',
    children: [
      {
        text: 'Help 1',
        onClick: () => {}
      },
      {
        text: 'Help 2',
        onClick: () => {}
      },
      {
        text: 'Help 3',
        items: [
          {
            text: 'group test 1',
            onClick: () => {}
          },
          {
            text: 'group test 2',
            onClick: () => {}
          },
          {
            text: 'group test 3',
            onClick: () => {}
          }
        ]
      },
      {
        text: 'Help 4',
        onClick: () => {}
      }
    ]
  }
]
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.RNav {
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: $nav-height-desktop;
  background-color: var(--c-bg-mute);
  box-shadow: rgb(0 0 0 / 10%) 0 1px;
  user-select: none;
}
</style>
