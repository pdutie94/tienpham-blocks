import './style.editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/editor';
import { PanelBody, RangeControl } from '@wordpress/components';

//import RecentAuthors from './components/RecentAuthors';

registerBlockType('tienpham-blocks/recent-authors', {
    title: __('Recent Authors'),
    description: __('Show the latest authors'),
    category: 'layout',
    icon: 'admin-users',
    keywords: [__('recent'), __('author'), __('authors')],
    attributes: {
        alignment: {
            type: 'string'
        },
        columns: {
            type: 'number',
            default: 3
        },
        number_show: {
            type: 'number',
            default: 6
        }
    },
    edit2: RecentAuthors,
    edit: ({className, attributes, setAttributes}) => {
        const { alignment, columns, number_show } = attributes;
        const onChangeAlignment = (alignment) => {
            setAttributes( {alignment} )
        }
        // wp.apiFetch( { path: '/wp/v2/users?roles=author' } ).then( function( users ){
        //     console.log(users);
        // } );
        return (
            <>
            <BlockControls
                controls={[
                    {
                        icon: 'editor-alignleft',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => onChangeAlignment('left')
                    },
                    {
                        icon: 'editor-aligncenter',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => onChangeAlignment('center')
                    },
                    {
                        icon: 'editor-alignright',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => onChangeAlignment('right')
                    }
                ]}
                >
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Display Settings' ) }>
                    <RangeControl
                        label={ __( 'Columns' ) }
                        value={ columns }
                        min={ 1 }
                        max={ 4 }
                        onChange={ (value) => setAttributes( { columns: value } ) }
                    />
                    <RangeControl
                        label={ __( 'Number of items to display' ) }
                        value={ number_show }
                        min={ 1 }
                        max={ 10 }
                        onChange={ (value) => setAttributes( { number_show: value } ) }
                    />

                </PanelBody>
            </InspectorControls>
            <div className={className} style={{textAlign: alignment}}>
                Test
            </div>
            </>
        );
    },
    save: ({ attributes }) => {
        // const { columns, number_show, alignment } = attributes;
        // return <h1 style={{textAlign: alignment}}>Columns: {columns}, Number show: {number_show}</h1>;
        return 'Test';
    }
})