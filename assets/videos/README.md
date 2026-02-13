# Instagram Reels Videos

## Required Videos

For the Instagram Reels level to work, you need to add 3 videos to this folder:

### Video Files:
- `reel1.mp4` - First brainrot meme video
- `reel2.mp4` - Second brainrot meme video  
- `reel3.mp4` - Third brainrot meme video

### Optional Thumbnail Images (for loading state):
- `reel1-thumb.jpg`
- `reel2-thumb.jpg`
- `reel3-thumb.jpg`

## Video Specifications

**Format:** MP4 (H.264 codec recommended for browser compatibility)

**Aspect Ratio:** 9:16 (vertical video) or similar Instagram Reels format
- Recommended resolution: 1080x1920 or 720x1280

**Duration:** 10-30 seconds (short and funny for best "brainrot" experience)

**Audio:** Optional but recommended for meme videos

**File Size:** Keep under 10MB per video for fast loading

## Finding Brainrot Memes

Search for:
- "brainrot memes compilation" on YouTube (download with yt-dlp or similar)
- Funny TikTok/Instagram Reels compilations
- Skibidi toilet, brain rot, gen alpha humor videos

## Tips

1. Make sure videos are funny and short (15-20 seconds ideal)
2. Choose videos that will make your wife laugh
3. Mix different types of memes for variety
4. Test autoplay works in browser (some browsers block autoplay with sound)

## Current Configuration

The game expects exactly 3 videos. To change this:
1. Open `src/app/puzzle/puzzle.component.ts`
2. Find `requiredReels = 3`
3. Add/remove video objects in the `reelVideos` array

## How It Works

1. After completing the puzzle, the Reels level starts
2. Each video plays in fullscreen with Instagram-style UI
3. Your wife swipes up (or clicks) to see the next video
4. After watching all 3 videos, the Hidden Object level begins
5. You can skip Reels anytime by pressing the **→ (Right Arrow)** key
