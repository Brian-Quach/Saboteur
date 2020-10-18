import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'saboteur-board',
  styleUrl: 'saboteur-board.css',
  shadow: true
})
export class SaboteurBoard {
  /**
   * The first name
   */
  @Prop() count: string = 'first';

  render() {
    return <div>Your <span class="tomat">{`{ ${this.count} }`}</span> Stencil component!</div>;
  }
}
