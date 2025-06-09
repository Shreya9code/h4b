import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function DiseaseDetectionPage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const { location } = useAppContext();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // Here you would call your API for disease detection
    }
  };

  return (
    <div>
      <h2>Disease Detection</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && <img src={image} alt="Uploaded plant" />}
      {result && (
        <div className="result">
          <h3>Diagnosis: {result.disease}</h3>
          <p>Treatment: {result.treatment}</p>
        </div>
      )}
    </div>
  );
}

export default DiseaseDetectionPage;