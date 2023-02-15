/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const ALLOWED_BLOCKS = ['ingeni-bootstrap-accordion/accordion-item'];
const TEMPLATE = [
    [ 'ingeni-bootstrap-accordion/accordion-item', { title: 'Item title', content: 'Item content' } ],
];

registerBlockType( metadata.name, {
    edit: () => {
        const blockProps = useBlockProps( { className: 'accordion' } );

        return (
            <div { ...blockProps }>
                <InnerBlocks template={ TEMPLATE } allowedBlocks={ ALLOWED_BLOCKS } />
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save( { className: 'accordion' } );
        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
