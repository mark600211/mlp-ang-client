export class OptionsBaseModel {
  value: string;
  key: string;
  buttonController: boolean = false;

  constructor(options: { id: string; label: string }) {
    this.value = options.label;
    this.key = options.id;
  }
}
