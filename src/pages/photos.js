import React from "react"
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import PhotoFrame from '../components/PhotoFrame'


export default () => (
  <Layout>
    <Bio 
      title="Photos"
      description="I love to explore new places."
    />
    <div className="flexbox">
      <PhotoFrame imageUrl="https://source.unsplash.com/random/150x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/350x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/100x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/350x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/350x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/350x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/100x200"/>
    </div>
   </Layout>
)