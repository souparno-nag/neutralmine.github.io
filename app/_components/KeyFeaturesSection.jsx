const KeyFeaturesSection = () => (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f4' }}>
        <h2>Key Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', padding: '1rem', textAlign: 'center' }}>
                <img src="/images/emission-icon.png" alt="Emission Estimation" style={{ width: '60px' }} />
                <h3>Emission Estimation</h3>
                <p>Calculate emissions from various mining activities.</p>
            </div>
            <div style={{ flex: '1', padding: '1rem', textAlign: 'center' }}>
                <img src="/images/pathways-icon.png" alt="Carbon Neutrality Pathways" style={{ width: '60px' }} />
                <h3>Carbon Neutrality Pathways</h3>
                <p>Explore strategies to reduce and offset emissions.</p>
            </div>
            <div style={{ flex: '1', padding: '1rem', textAlign: 'center' }}>
                <img src="/images/visualization-icon.png" alt="Data Visualization" style={{ width: '60px' }} />
                <h3>Data Visualization</h3>
                <p>Visual insights to track progress and make informed decisions.</p>
            </div>
            <div style={{ flex: '1', padding: '1rem', textAlign: 'center' }}>
                <img src="/images/carbon-credits-icon.png" alt="Carbon Credits" style={{ width: '60px' }} />
                <h3>Carbon Credits</h3>
                <p>Estimate potential carbon credits.</p>
            </div>
        </div>
    </section>
);

export default KeyFeaturesSection;
