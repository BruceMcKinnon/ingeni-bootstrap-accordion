/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {  InnerBlocks, useBlockProps, RichText, InspectorControls  } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
    ToggleControl,
} from "@wordpress/components";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 * 
 */
export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();

    //console.log('edit atts:'+JSON.stringify(attributes));

    const onChangeTitle = ( value ) => {
        setAttributes( { title: value } );
    };

    //console.log('edit about to return');
    return (
        <div>
            <InspectorControls>
            <PanelBody title="Settings" initialOpen={true}>
                <PanelRow>
                <TextControl
                    label="Item ID"
                    onChange={ ( blockID ) => setAttributes( { blockID } ) }
                    value={ attributes.blockID }
                />
                </PanelRow>
                <PanelRow>
                <ToggleControl
                    label="Show on Load?"
                    checked={ attributes.autoOpen }
                    onChange={() => setAttributes({ autoOpen: !attributes.autoOpen })}
                />

                </PanelRow>
            </PanelBody>
            </InspectorControls>

            <div { ...blockProps } >
                <h2 class="accordion-header" id={ attributes.blockID + '_head'}>
                    <RichText class="accordion-button collapsed" tagName="div" value={ attributes.title } onChange={ onChangeTitle } data-bs-toggle="collapse" data-bs-target={ '#' + attributes.blockID } aria-expanded={ attributes.autoOpen } aria-controls={ attributes.blockID } />
                </h2>

                <div id={ attributes.blockID } class="accordion-collapse collapse" aria-labelledby={ attributes.blockID + '_head'}>
                    <div class="accordion-body" >
                        <InnerBlocks />
                    </div>
                </div>
            </div>
        </div>
    );
}