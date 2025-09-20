# Stickers System - Quick Guide

## How to Add Stickers to Your Landing Page

### Method 1: Direct HTML (Ea### Example 5: JavaScript Dynamic Sticker with Stop-Motion
```javascript
addSticker({
    src: 'public/img/brush.png',
    size: 'medium',
    position: { top: 60, right: 10 },
    animation: 'stop-motion',
    alt: 'Paint brush'
});
```

## Animation Details

### Stop-Motion Effects:
- **`sticker--stop-motion`**: Smooth stop-motion with subtle position/rotation changes
- **`sticker--jitter`**: More pronounced jerky movements using steps
- **`sticker--wobble-spin`**: Spinning with stop-motion style jumps

### Spinning Effects:
- **`sticker--spin`**: Continuous smooth 360° rotation (4 seconds per rotation)
- **`sticker--spin-slow`**: Slower rotation (8 seconds per rotation)
- **`sticker--spin-reverse`**: Rotates counter-clockwise

### Classic Effects:
- **`sticker--float`**: Gentle up/down movement
- **`sticker--wiggle`**: Subtle rotation wobbledd stickers directly in your `index.html` inside the `.stickers` container:

```html
<div class="stickers">
    <!-- Your sticker -->
    <div class="sticker sticker--medium sticker--top-left sticker--float">
        <img src="public/img/your-image.jpg" alt="Description">
    </div>
</div>
```

### Method 2: JavaScript (Dynamic)

Use the `addSticker()` function in your browser console or JavaScript:

```javascript
addSticker({
    src: 'public/img/your-image.jpg',
    size: 'medium',
    preset: 'top-left',
    animation: 'float'
});
```

## Available Options

### Size Classes
- `sticker--small` - 80px (50px on mobile)
- `sticker--medium` - 150px (100px on mobile)
- `sticker--large` - 250px (150px on mobile)

### Position Presets
- `sticker--top-left`
- `sticker--top-right`
- `sticker--bottom-left`
- `sticker--bottom-right`
- `sticker--center-left`
- `sticker--center-right`

### Rotation Classes
- `sticker--rotate-left` - Rotates -15deg
- `sticker--rotate-right` - Rotates 15deg
- `sticker--rotate-slight` - Rotates 5deg

### Animation Classes
- `sticker--float` - Gentle floating effect
- `sticker--wiggle` - Subtle wiggle/rotation
- `sticker--stop-motion` - Jerky stop-motion movement effect
- `sticker--spin` - Smooth 360° rotation (4s)
- `sticker--spin-slow` - Slower 360° rotation (8s)
- `sticker--spin-reverse` - Reverse 360° rotation
- `sticker--wobble-spin` - Stop-motion style spinning with scale
- `sticker--jitter` - Pronounced jerky/jittery movement

### Custom Positioning

For precise control, use inline styles:

```html
<div class="sticker sticker--medium" style="top: 25%; left: 30%;">
    <img src="public/img/your-image.jpg" alt="Description">
</div>
```

Or with JavaScript:

```javascript
addSticker({
    src: 'public/img/your-image.jpg',
    size: 'small',
    position: { top: 25, left: 30 }, // Percentage values
    animation: 'wiggle'
});
```

## Examples

### Example 1: Stop-Motion Sticker at Top Left
```html
<div class="sticker sticker--large sticker--top-left sticker--stop-motion">
    <img src="public/img/cat.png" alt="Cat sticker">
</div>
```

### Example 2: Spinning Sticker (Custom Position)
```html
<div class="sticker sticker--medium sticker--spin" style="top: 15%; right: 20%;">
    <img src="public/img/star.png" alt="Star">
</div>
```

### Example 3: Wobble-Spin Effect
```html
<div class="sticker sticker--small sticker--bottom-right sticker--wobble-spin">
    <img src="public/img/icon.png" alt="Icon">
</div>
```

### Example 4: Jittery Movement
```html
<div class="sticker sticker--medium sticker--center-left sticker--jitter">
    <img src="public/img/element.png" alt="Element">
</div>
```

### Example 5: JavaScript Dynamic Sticker with Stop-Motion
```javascript
addSticker({
    src: 'public/img/brush.png',
    size: 'medium',
    position: { top: 60, right: 10 },
    rotation: 'rotate-right',
    animation: 'float',
    alt: 'Paint brush'
});
```

## Tips

1. **Balance**: Don't overcrowd - aim for 4-6 stickers
2. **Contrast**: Mix sizes (large, medium, small)
3. **Animation**: Don't animate all stickers - some static, some animated
4. **Mobile**: Test on mobile - center stickers hide on small screens
5. **Performance**: Use optimized images (PNG/WebP, compressed)

## Responsive Behavior

- **Desktop**: All stickers visible at full size
- **Tablet (< 768px)**: Reduced sizes, center stickers hidden
- **Mobile (< 480px)**: Further reduced, fewer stickers

The system automatically handles responsive sizing and positioning!
