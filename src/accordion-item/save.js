/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 * 
 */
export default function save( { attributes } ) {
    const blockProps = useBlockProps.save( );
    //console.log('save acc-item atts:'+JSON.stringify(attributes));

    // Set a block ID by default
    if (attributes.blockID == '' || attributes.blockID == null ) {
        attributes.blockID = 'item_' + String(Math.floor(Math.random() * (9999-1000)) + 1000) ;
        //console.log('acc-item set default:'+JSON.stringify(attributes));
    }

    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id={ attributes.blockID + '_head'}>
                <RichText.Content class="accordion-button collapsed" tagName="div" value={attributes.title} data-bs-toggle="collapse" data-bs-target={ '#' + attributes.blockID } aria-expanded="false" aria-controls={ attributes.blockID }/>
            </h2>

            <div id={ attributes.blockID } class="accordion-collapse collapse" aria-labelledby={ attributes.blockID + '_head'}>
                <RichText.Content class="accordion-body" tagName="div" value={ attributes.content } />
            </div>
      </div>
    );
}
