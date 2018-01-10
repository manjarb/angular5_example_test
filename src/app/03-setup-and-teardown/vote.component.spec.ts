import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('increment Total Votes', () => {
    // Action
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('Remove total vote', () => {
  });
});
