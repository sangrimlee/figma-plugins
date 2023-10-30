import { globalCss } from '@/stitches.config';
import { colors } from '@/vars';

export const globalStyles = globalCss({
  '*,::before,::after': {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: colors.border.default,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    overflowWrap: 'break-word',
    wordBreak: 'keep-all',
  },

  html: {
    tabSize: 4,
    MozTabSize: 4,
    fontFamily: '$sans',
    lineHeight: '$normal',
    fontFeatureSettings: 'normal',
    fontVariationSettings: 'normal',
    WebkitTextSizeAdjust: '100%',
  },

  body: {
    margin: 0,
    lineHeight: 'inherit',
  },

  'html,body': {
    color: colors.text.default,
    backgroundColor: colors.bg.default,
  },

  hr: {
    height: 0,
    color: 'inherit',
    borderTopWidth: 1,
  },

  'abbr:where([title])': {
    textDecoration: 'underline dotted',
  },

  'h1,h2,h3,h4,h5,h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },

  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },

  'b,strong': {
    fontWeight: 'bolder',
  },

  'code,kbd,samp,pre': {
    fontFamily: '$mono',
    fontSize: '1em',
  },

  small: {
    fontSize: '80%',
  },

  'sub,sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  table: {
    textIndent: 0,
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },

  'button,input,optgroup,select,textarea': {
    fontFamily: 'inherit',
    fontFeatureSettings: 'inherit',
    fontVariationSettings: 'inherit',
    fontSize: '100%',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
    borderRadius: 0,
  },

  'button,select': {
    textTransform: 'none',
  },

  'button,[type="button"],[type="reset"],[type="submit"]': {
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    WebkitAppearance: 'button',
  },

  ':moz-focusring': {
    outline: 'auto',
  },

  ':moz-ui-invalid': {
    boxShadow: 'none',
  },

  progress: {
    verticalAlign: 'baseline',
  },

  '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type="search"]': {
    outlineOffset: '-2px',
    WebkitAppearance: 'textfield',
  },

  '::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },

  '::-webkit-file-upload-button': {
    font: 'inherit',
    WebkitAppearance: 'button',
  },

  summary: {
    display: 'list-item',
  },

  'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre': {
    margin: 0,
  },

  fieldset: {
    margin: 0,
    padding: 0,
  },

  legend: {
    padding: 0,
  },

  'ol,ul,menu': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  dialog: {
    padding: 0,
  },

  textarea: {
    resize: 'vertical',
  },

  'input::placeholder,textarea::placeholder': {
    opacity: 1,
    color: colors.text.tertiary.default,
  },

  'button,[role="button"]': {
    cursor: 'pointer',
  },

  ':disabled': {
    cursor: 'default',
  },

  'img,svg,video,canvas,audio,iframe,embed,object': {
    display: 'block',
    verticalAlign: 'middle',
  },

  'img,video': {
    maxWidth: '100%',
    height: 'auto',
  },

  '[hidden]': {
    display: 'none',
  },
});
