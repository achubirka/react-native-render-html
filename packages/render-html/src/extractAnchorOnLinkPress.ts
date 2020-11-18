import { TBlock, TPhrasing } from '@native-html/transient-render-tree';
import { GestureResponderEvent } from 'react-native';
import { RenderHTMLPassedProps } from './types';

export default function extractAnchorOnLinkPress(
  tnode: TBlock | TPhrasing,
  passedProps: RenderHTMLPassedProps
) {
  // @ts-ignore
  const href: string = tnode.href;
  const onLinkPress = passedProps.onLinkPress;
  const shouldHandleLinkPress =
    tnode.isAnchor &&
    typeof href === 'string' &&
    typeof onLinkPress === 'function';
  return shouldHandleLinkPress
    ? (e: GestureResponderEvent) => onLinkPress!(e, href, tnode.attributes)
    : undefined;
}