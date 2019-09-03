import './style.editor.scss';

import { registerBlockType} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls } from '@wordpress/editor';
import { Toolbar, DropdownMenu } from '@wordpress/components';

registerBlockType('tienpham-blocks/secondblock', {
    title: __('Second Block', 'tienpham-blocks'),
    description: __('My second block', 'tienpham-blocks'),
    category: 'layout',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>,
    keywords: [__('photo', 'tienpham-blocks'), __('image', 'tienpham-blocks')],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        alignment: {
            type: 'string'
        }
    },
    edit: ({className, attributes, setAttributes}) => {
        const { content, alignment } = attributes;
        const onChangeContent = (newConent) => {
            setAttributes( {content: newConent} )
        }
        const onChangeAlignment = (alignment) => {
            setAttributes( {alignment} )
        }
        return (
            <>
                <BlockControls
                    controls={[
                        [{
                            icon: <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-editor-alignright" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 5V3H8v2h9zm0 4V7H3v2h14zm0 4v-2H8v2h9zm0 4v-2H3v2h14z"></path></svg>,
                            title: __('Right', 'tienpham-blocks'),
                            onClick: () => onChangeAlignment('right')
                        }]
                    ]}
                    >
                </BlockControls>
                <RichText 
                tagName="p"
                className={className}
                onChange={ onChangeContent }
                value={content}
                style={{textAlign: alignment}}
                />
            </>
        )
    },
    save: ({attributes}) => {
        const { content, alignment } = attributes;
        return <RichText.Content
        tagName="p"
        value={ content }
        style={{textAlign: alignment}}
        />;
    }
})