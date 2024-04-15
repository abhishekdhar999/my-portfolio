import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

 import resumeFile from '../../src/Resume(outside).pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumeComponent(){
    return (
        <div>
            <Document className=" h-[110vh] w-auto flex justify-center  overflow-hidden"
                 file={resumeFile}
                onLoadError={console.error}
                options={{ workerSrc: "/pdf.worker.js" }}
                style={{ display: 'none'} }
            >
                <Page pageNumber={1} />
            </Document>

            
        </div>
    );
};