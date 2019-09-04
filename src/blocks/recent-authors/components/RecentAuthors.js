import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { BlockControls, InspectorControls } from '@wordpress/editor';
import { PanelBody, RangeControl } from '@wordpress/components';

class RecentAuthors extends Component {
    constructor(props) {
        super( ...arguments );
        this.props = props;
        this.onChangeAlignment = this.onChangeAlignment.bind(this);
        console.log(this.props);
    }

    onChangeAlignment(value) {
        setAttributes( {alignment: value} )
    }

    componentWillMount() {
    }
    
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { alignment, columns, number_show } = attributes;
        return (
            <>
            <BlockControls
                controls={[
                    {
                        icon: 'editor-alignleft',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => this.onChangeAlignment('left')
                    },
                    {
                        icon: 'editor-aligncenter',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => this.onChangeAlignment('center')
                    },
                    {
                        icon: 'editor-alignright',
                        title: __('Right', 'tienpham-blocks'),
                        onClick: () => this.onChangeAlignment('right')
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
                <RecentAuthors />
            </div>
            </>
        );
    }
}

export default RecentAuthors;