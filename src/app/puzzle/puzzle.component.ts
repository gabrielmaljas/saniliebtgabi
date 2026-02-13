import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PuzzlePiece {
  id: number;
  currentIndex: number;
  correctIndex: number;
  imageUrl: string;
}

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  // Quiz state
  showQuiz = true;
  showPuzzle = false;
  quizAnswered = false;
  quizCorrect = false;
  selectedAnswer: number | null = null;
  
  // Date calculation
  relationshipStartDate = new Date(2011, 7, 14); // August 14, 2011 (month is 0-indexed)
  today = new Date();
  correctDays = 0;
  answerOptions: number[] = [];
  
  // Puzzle state
  puzzlePieces: PuzzlePiece[] = [];
  gridSize = 3; // 3x3 grid
  draggedPiece: PuzzlePiece | null = null;
  selectedPiece: PuzzlePiece | null = null; // For mobile tap-to-swap
  showSuccessMessage = false;
  valentineImageUrl = 'assets/valentine-image.jpg';
  
  // Instagram Reels Level state
  showReels = false;
  currentReelIndex = 0;
  reelsWatched = 0;
  requiredReels = 3;
  isSwipingUp = false;
  touchStartY = 0;
  touchEndY = 0;
  
  // Video data - ADD YOUR VIDEOS HERE!
  reelVideos = [
    {
      id: 1,
      videoUrl: 'assets/videos/reel1.mp4',
      placeholder: 'assets/videos/reel1-thumb.jpg',
      caption: '😂 Brainrot Meme #1'
    },
    {
      id: 2,
      videoUrl: 'assets/videos/reel2.mp4',
      placeholder: 'assets/videos/reel2-thumb.jpg',
      caption: '🤪 Brainrot Meme #2'
    },
    {
      id: 3,
      videoUrl: 'assets/videos/reel3.mp4',
      placeholder: 'assets/videos/reel3-thumb.jpg',
      caption: '💀 Brainrot Meme #3'
    }
  ];
  
  // Hidden Object Game state
  showHiddenObject = false;
  hiddenObjectFound = false;
  wrongClicks = 0;
  maxWrongClicks = 3;
  showHint = false;
  clickMarkers: {x: number, y: number, correct: boolean}[] = [];
  
  // Target area where user needs to click (in percentages for responsiveness)
  // Adjusted based on click at X=49.1%, Y=59.9%
  targetArea = {
    xMin: 44,  // Left edge (44% from left)
    xMax: 54,  // Right edge (54% from left)
    yMin: 55,  // Top edge (55% from top)
    yMax: 65   // Bottom edge (65% from top)
  };
  
  // Valentine question state
  showQuestion = false;
  answer = '';

  ngOnInit() {
    this.calculateDays();
    this.generateAnswerOptions();
  }
  
  // DEBUG: Skip levels with arrow key (RIGHT ARROW)
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      console.log('⏭️  SKIP: Level wird übersprungen...');
      
      if (this.showQuiz) {
        // Skip Quiz → Go to Puzzle
        this.showQuiz = false;
        this.showPuzzle = true;
        this.initializePuzzle();
        console.log('✅ Quiz übersprungen → Puzzle geladen');
      } else if (this.showPuzzle && !this.showSuccessMessage) {
        // Skip Puzzle → Go to Reels
        this.showPuzzle = false;
        this.showReels = true;
        console.log('✅ Puzzle übersprungen → Reels geladen');
      } else if (this.showReels) {
        // Skip Reels → Go to Hidden Object
        this.showReels = false;
        this.showHiddenObject = true;
        console.log('✅ Reels übersprungen → Wimmelbild geladen');
      } else if (this.showHiddenObject && !this.hiddenObjectFound) {
        // Skip Hidden Object → Go to Question
        this.showHiddenObject = false;
        this.showQuestion = true;
        console.log('✅ Wimmelbild übersprungen → Valentine-Frage geladen');
      }
    }
  }
  
  calculateDays() {
    // Calculate days between relationship start and today
    const timeDiff = this.today.getTime() - this.relationshipStartDate.getTime();
    this.correctDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  }
  
  generateAnswerOptions() {
    // Generate 3 answer options: 1 correct, 2 wrong
    const wrongAnswer1 = this.correctDays - 365; // 1 year less
    const wrongAnswer2 = this.correctDays + 730; // 2 years more
    
    // Create array and shuffle
    this.answerOptions = this.shuffleArray([this.correctDays, wrongAnswer1, wrongAnswer2]);
  }
  
  selectAnswer(days: number) {
    this.selectedAnswer = days;
  }
  
  submitQuizAnswer() {
    if (this.selectedAnswer === null) return;
    
    this.quizAnswered = true;
    this.quizCorrect = this.selectedAnswer === this.correctDays;
    
    if (this.quizCorrect) {
      setTimeout(() => {
        this.showQuiz = false;
        this.showPuzzle = true;
        this.initializePuzzle();
      }, 2000);
    }
  }
  
  retryQuiz() {
    this.quizAnswered = false;
    this.quizCorrect = false;
    this.selectedAnswer = null;
  }

  initializePuzzle() {
    // Create puzzle pieces
    const pieces: PuzzlePiece[] = [];
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      pieces.push({
        id: i,
        currentIndex: i,
        correctIndex: i,
        imageUrl: this.getPieceStyle(i)
      });
    }

    // Shuffle the pieces
    this.puzzlePieces = this.shuffleArray(pieces);
    this.puzzlePieces.forEach((piece, index) => {
      piece.currentIndex = index;
    });
  }

  shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getPieceStyle(index: number): string {
    const row = Math.floor(index / this.gridSize);
    const col = index % this.gridSize;
    const percentX = (col * 100) / (this.gridSize - 1);
    const percentY = (row * 100) / (this.gridSize - 1);
    return `${percentX}% ${percentY}%`;
  }

  onDragStart(event: DragEvent, piece: PuzzlePiece) {
    this.draggedPiece = piece;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetPiece: PuzzlePiece) {
    event.preventDefault();
    
    if (this.draggedPiece && this.draggedPiece !== targetPiece) {
      // Swap pieces
      const draggedIndex = this.puzzlePieces.findIndex(p => p.id === this.draggedPiece!.id);
      const targetIndex = this.puzzlePieces.findIndex(p => p.id === targetPiece.id);

      const temp = this.puzzlePieces[draggedIndex];
      this.puzzlePieces[draggedIndex] = this.puzzlePieces[targetIndex];
      this.puzzlePieces[targetIndex] = temp;

      // Update current indices
      this.puzzlePieces[draggedIndex].currentIndex = draggedIndex;
      this.puzzlePieces[targetIndex].currentIndex = targetIndex;

      this.checkIfSolved();
    }
    
    this.draggedPiece = null;
  }

  // Mobile-friendly tap-to-swap functionality
  onPieceTap(piece: PuzzlePiece) {
    if (!this.selectedPiece) {
      // First tap: select piece
      this.selectedPiece = piece;
    } else if (this.selectedPiece.id === piece.id) {
      // Tap same piece: deselect
      this.selectedPiece = null;
    } else {
      // Second tap: swap pieces
      this.swapPieces(this.selectedPiece, piece);
      this.selectedPiece = null;
    }
  }

  isPieceSelected(piece: PuzzlePiece): boolean {
    return this.selectedPiece?.id === piece.id;
  }

  swapPieces(piece1: PuzzlePiece, piece2: PuzzlePiece) {
    const index1 = this.puzzlePieces.findIndex(p => p.id === piece1.id);
    const index2 = this.puzzlePieces.findIndex(p => p.id === piece2.id);

    const temp = this.puzzlePieces[index1];
    this.puzzlePieces[index1] = this.puzzlePieces[index2];
    this.puzzlePieces[index2] = temp;

    // Update current indices
    this.puzzlePieces[index1].currentIndex = index1;
    this.puzzlePieces[index2].currentIndex = index2;

    this.checkIfSolved();
  }

  checkIfSolved() {
    const isSolved = this.puzzlePieces.every((piece, index) => 
      piece.correctIndex === piece.currentIndex
    );

    if (isSolved) {
      console.log('🎉 Puzzle gelöst! Wimmelbild wird geladen...');
      setTimeout(() => {
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showPuzzle = false;
          this.showSuccessMessage = false;
          this.showReels = true;
          console.log('📱 Reels-Level gestartet!');
        }, 2000);
      }, 500);
    }
  }
  
  // Hidden Object Game Methods
  onImageClick(event: MouseEvent) {
    if (this.hiddenObjectFound) return;
    
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    // Debug: Log click coordinates
    console.log(`Klick bei: X=${x.toFixed(1)}%, Y=${y.toFixed(1)}%`);
    console.log(`Target Area: X=${this.targetArea.xMin}-${this.targetArea.xMax}%, Y=${this.targetArea.yMin}-${this.targetArea.yMax}%`);
    
    // Check if click is in target area
    const isCorrect = (
      x >= this.targetArea.xMin && 
      x <= this.targetArea.xMax && 
      y >= this.targetArea.yMin && 
      y <= this.targetArea.yMax
    );
    
    console.log(`Treffer: ${isCorrect ? '✅ JA!' : '❌ Nein'}`);
    
    // Add click marker
    this.clickMarkers.push({ x, y, correct: isCorrect });
    
    if (isCorrect) {
      this.hiddenObjectFound = true;
      setTimeout(() => {
        this.showHiddenObject = false;
        this.showQuestion = true;
      }, 2000);
    } else {
      this.wrongClicks++;
      if (this.wrongClicks >= this.maxWrongClicks) {
        this.showHint = true;
      }
      
      // Remove click marker after animation
      setTimeout(() => {
        this.clickMarkers.shift();
      }, 1000);
    }
  }

  onYesClick() {
    this.answer = 'yes';
  }

  onNoClick() {
    this.answer = 'no';
  }

  // Instagram Reels Methods
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndY = event.changedTouches[0].clientY;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.touchStartY - this.touchEndY;
    const minSwipeDistance = 50; // Minimum pixels for swipe
    
    // Swipe up detected (touch moved upwards)
    if (swipeDistance > minSwipeDistance) {
      this.onSwipeUp();
    }
  }

  onSwipeUp() {
    if (this.isSwipingUp) return;
    
    this.isSwipingUp = true;
    console.log(`📱 Swipe up! Video ${this.currentReelIndex + 1} geschaut`);
    
    this.reelsWatched++;
    
    if (this.reelsWatched >= this.requiredReels) {
      // All reels watched, move to next level
      setTimeout(() => {
        this.showReels = false;
        this.showHiddenObject = true;
        console.log('✅ Alle Reels geschaut → Wimmelbild geladen!');
      }, 500);
    } else {
      // Show next reel
      setTimeout(() => {
        this.currentReelIndex++;
        this.isSwipingUp = false;
      }, 300);
    }
  }
  
  getCurrentReel() {
    return this.reelVideos[this.currentReelIndex] || this.reelVideos[0];
  }

  resetPuzzle() {
    this.showSuccessMessage = false;
    this.showQuestion = false;
    this.answer = '';
    this.showQuiz = true;
    this.showPuzzle = false;
    this.showReels = false;
    this.currentReelIndex = 0;
    this.reelsWatched = 0;
    this.isSwipingUp = false;
    this.showHiddenObject = false;
    this.hiddenObjectFound = false;
    this.wrongClicks = 0;
    this.showHint = false;
    this.clickMarkers = [];
    this.quizAnswered = false;
    this.quizCorrect = false;
    this.selectedAnswer = null;
    this.selectedPiece = null;
    this.calculateDays();
    this.generateAnswerOptions();
  }
}
