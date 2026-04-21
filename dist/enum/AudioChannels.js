"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioChannels = void 0;
var AudioChannels;
(function (AudioChannels) {
    AudioChannels[AudioChannels["MONO"] = 1] = "MONO";
    AudioChannels[AudioChannels["STEREO"] = 2] = "STEREO";
    AudioChannels[AudioChannels["SURROUND_5_1"] = 6] = "SURROUND_5_1";
    AudioChannels[AudioChannels["SURROUND_7_1"] = 8] = "SURROUND_7_1";
})(AudioChannels || (exports.AudioChannels = AudioChannels = {}));
