import { Component, OnInit } from '@angular/core';
import { Round } from '../models/round';
import { RoundService } from '../round.service';

@Component({
  selector: 'app-bjjtracker',
  templateUrl: './bjjtracker.component.html',
  styleUrls: ['./bjjtracker.component.css']
})
export class BjjtrackerComponent implements OnInit {
  title = 'BJJ Round Tracker';
  rounds: Round[] = [];
  selected = null;
  newRound: Round = new Round();
  editRound = null;

  reload() {
    this.roundService.index().subscribe(
      data => {
        this.rounds = data;
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  getNumOfRounds() {
    return this.rounds.length;
  }

  setEditRound() {
    this.editRound = Object.assign({}, this.selected);
  }

  displayRound(round) {
    this.selected = round;
  }
  addRound(round) {
    this.roundService.create(round).subscribe(
      data => {
        this.newRound = new Round();
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  updateRound(round) {
    this.roundService.update(round).subscribe(
      data => {
        this.selected = null;
        this.editRound = null;
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  deleteRound(id) {
    this.roundService.destroy(id).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  getTotalPoints() {
    let totalPoints = 0;

    this.rounds.forEach(function(round) {
      totalPoints += round.pointsScored;
    });
    return totalPoints;
  }
  getTotalWins() {
    let totalWins = 0;

    this.rounds.forEach(function(round) {
      if (round.result === 'Win') {
        totalWins++;
      }
    });
    return totalWins;
  }
  constructor(private roundService: RoundService) {}

  ngOnInit() {
    this.reload();
  }
}
