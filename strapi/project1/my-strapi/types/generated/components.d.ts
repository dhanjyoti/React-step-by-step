import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoHead extends Schema.Component {
  collectionName: 'components_seo_heads';
  info: {
    displayName: 'head';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    url: Attribute.String;
  };
}

export interface SidehugSidehugComponent extends Schema.Component {
  collectionName: 'components_sidehug_sidehug_components';
  info: {
    displayName: 'sidehug-component';
    description: '';
  };
  attributes: {
    head: Attribute.String & Attribute.Required;
    paragraph: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    direction: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageurl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.head': SeoHead;
      'sidehug.sidehug-component': SidehugSidehugComponent;
    }
  }
}
