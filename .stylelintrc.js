// Отключенные правила (мешали нормально работать расширению VS Code):
// 'selector-anb-no-unmatchable': true,

// 'declaration-block-no-duplicate-properties': [
// 	true,
// 	{
// 		ignore: ['consecutive-duplicates-with-different-syntaxes'],
// 	},
// ],

// + добавил 'plugin/stylelint-group-selectors': true,
// + изменил class pattern на БЭМ

'use strict';

module.exports = {
  plugins: [
    // REC: плагины через nvm, видимо, все. Ну или только stylelint так.
    "stylelint-group-selectors",
    "stylelint-prettier"
  ],
  rules: {
    // stylelint-config-recommended
    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    // 'declaration-block-no-duplicate-properties': [
    // 	true,
    // 	{
    // 		ignore: ['consecutive-duplicates-with-different-syntaxes'],
    // 	},
    // ],
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': true,
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    // 'selector-anb-no-unmatchable': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,
    // stylelint-config-standard
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: [
          'opacity',
          'fill-opacity',
          'flood-opacity',
          'stop-opacity',
          'stroke-opacity',
        ],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: (name) => `Expected custom media query name "${name}" to be kebab-case`,
      },
    ],
    'custom-property-pattern': [
      // default kebab style
      // '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      // --greyC4 affordable
      '[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
      {
        message: (name) => `Expected custom property name "${name}" to be kebab-case`,
      },
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'hue-degree-notation': 'angle',
    'import-notation': 'url',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: (name) => `Expected keyframe name "${name}" to be kebab-case`,
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    // тут изменение
    'media-feature-range-notation': 'prefix',
    'number-max-precision': 4,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      // Default BEM:
      // ^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(_[a-z0-9]([-]?[a-z0-9]+)*)?(_[a-z0-9]([-]?[a-z0-9]+)*)?$
      // My preferable BEM:
      // '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      //camelCase:
      '[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
      {
        // Default BEM: block-name__elem-name_mod-name_mod-val
        // My preferable BEM: block-name__elem-name--mod-name--mod-val
        // message: (selector) => `Expected class selector "${selector}" to be kebab-case`,
        resolveNestedSelectors: true,
        // message: (selector) => `Expected class selector "${selector}" to match BEM pattern. https://regexr.com/3apms`,
        message: (selector) => `Expected class selector "${selector}" to match camelCase pattern.`,

      },
    ],
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: (selector) => `Expected id selector "${selector}" to be kebab-case`,
      },
    ],
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [
      true,
      {
        // `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
        ignoreValues: ['box', 'inline-box'],
      },
    ],
    // REMOVE 'selector-combinator-space-before': 'always',
    // REMOVE 'selector-combinator-space-after': 'always',
    //plugins
    'plugin/stylelint-group-selectors': true,
    "prettier/prettier": true
  },
};
