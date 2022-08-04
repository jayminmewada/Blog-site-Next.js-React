import Link from 'next/link';
import Head from 'next/head';


export default function firstPost(){

    return (<>
    <Head>
        <title>First Post</title>
        
    </Head>
   
                <h1>First Post</h1>
                
                <h2 className="title">
                
                    <Link href="/">
                
                        <a>Back to home  &rarr;</a>
                
                    </Link>
                
                </h2>
            
            </>);

};