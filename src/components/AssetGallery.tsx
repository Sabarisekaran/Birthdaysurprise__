import {
  TeddyBearAsset,
  BirthdayCakeAsset,
  PandaAsset,
  BalloonsAndGiftAsset,
  BannerFlagsAsset,
  InstructionBoxAsset,
  UIButtonAsset,
  DecorationsAsset,
  TitleTextAsset,
} from './index';
import './AssetGallery.css';

const AssetGallery: React.FC = () => {
  return (
    <div className="asset-gallery">
      <div className="gallery-header">
        <h1>Birthday Surprise UI Asset Pack</h1>
        <p>Hand-drawn sketch style with soft pastel pink and white palette</p>
      </div>

      <div className="assets-grid">
        {/* Title Section */}
        <div className="asset-item full-width">
          <div className="asset-preview">
            <TitleTextAsset size={400} />
          </div>
          <h3>Title Text</h3>
          <p>Handwritten style text with pink highlight</p>
        </div>

        {/* Banner */}
        <div className="asset-item full-width">
          <div className="asset-preview">
            <BannerFlagsAsset size={300} />
          </div>
          <h3>Decorative Banner Flags</h3>
          <p>Bunting triangle flags with alternating pink and white</p>
        </div>

        {/* Main Characters */}
        <div className="asset-item">
          <div className="asset-preview">
            <TeddyBearAsset size={180} />
          </div>
          <h3>Teddy Bear</h3>
          <p>Cute bear with pink bow</p>
        </div>

        <div className="asset-item">
          <div className="asset-preview">
            <PandaAsset size={180} />
          </div>
          <h3>Panda</h3>
          <p>Panda with party hat</p>
        </div>

        <div className="asset-item">
          <div className="asset-preview">
            <BirthdayCakeAsset size={180} />
          </div>
          <h3>Birthday Cake</h3>
          <p>Cake with candle and dripping icing</p>
        </div>

        {/* Balloons and Gift */}
        <div className="asset-item">
          <div className="asset-preview">
            <BalloonsAndGiftAsset size={180} />
          </div>
          <h3>Balloons & Gift</h3>
          <p>Three balloons with gift box</p>
        </div>

        {/* Decorations */}
        <div className="asset-item">
          <div className="asset-preview">
            <DecorationsAsset size={160} />
          </div>
          <h3>Decorations</h3>
          <p>Hearts and confetti elements</p>
        </div>

        {/* UI Components */}
        <div className="asset-item full-width">
          <div className="asset-preview">
            <InstructionBoxAsset size={300} />
          </div>
          <h3>Instruction Box</h3>
          <p>Dashed border card for mobile UI</p>
        </div>

        <div className="asset-item full-width">
          <div className="asset-preview">
            <UIButtonAsset size={280} label="Tap to Enter the Surprise" />
          </div>
          <h3>Action Button</h3>
          <p>Rounded button with soft pink styling</p>
        </div>
      </div>

      {/* Color Palette */}
      <div className="color-palette">
        <h2>Color Palette</h2>
        <div className="colors">
          <div className="color-box">
            <div className="color" style={{ backgroundColor: '#FFB6D9' }}></div>
            <p>Primary Pink</p>
            <code>#FFB6D9</code>
          </div>
          <div className="color-box">
            <div className="color" style={{ backgroundColor: '#FFE0F0' }}></div>
            <p>Light Pink</p>
            <code>#FFE0F0</code>
          </div>
          <div className="color-box">
            <div className="color" style={{ backgroundColor: '#F5E6E6' }}></div>
            <p>Soft Beige</p>
            <code>#F5E6E6</code>
          </div>
          <div className="color-box">
            <div className="color" style={{ backgroundColor: '#D4A5A5' }}></div>
            <p>Mauve</p>
            <code>#D4A5A5</code>
          </div>
          <div className="color-box">
            <div className="color" style={{ backgroundColor: 'white', border: '1px solid #ccc' }}></div>
            <p>White</p>
            <code>#FFFFFF</code>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="usage-section">
        <h2>How to Use These Assets</h2>
        <div className="usage-content">
          <h3>Importing Assets</h3>
          <pre>{`import {
  TeddyBearAsset,
  BirthdayCakeAsset,
  PandaAsset,
  BalloonsAndGiftAsset,
  BannerFlagsAsset,
  InstructionBoxAsset,
  UIButtonAsset,
  DecorationsAsset,
  TitleTextAsset,
} from './components';`}</pre>

          <h3>Using in Components</h3>
          <pre>{`// Basic usage
<TeddyBearAsset size={200} />

// With custom sizing
<BirthdayCakeAsset size={150} />

// Button with custom label
<UIButtonAsset size={180} label="Click Me" />`}</pre>

          <h3>Features</h3>
          <ul>
            <li>✨ Hand-drawn sketch style with clean thin outlines</li>
            <li>📱 Mobile UI friendly and responsive</li>
            <li>🎨 Soft pastel pink and white color palette</li>
            <li>🔄 Scalable vector graphics (SVG)</li>
            <li>💅 Easy to customize colors and sizes</li>
            <li>🚀 High resolution and sharp on any screen</li>
            <li>🎯 Individual components for flexible layouts</li>
            <li>📦 Transparent backgrounds by default</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssetGallery;
