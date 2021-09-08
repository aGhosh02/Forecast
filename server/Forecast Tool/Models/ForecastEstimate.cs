using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forecast_Tool.Models
{
    public class ForecastEstimate
    {
        [JsonProperty("ID")]
        public int ID { get; set; }
        [JsonProperty("Year")]
        public int Year { get; set; }
        [JsonProperty("January")]
        public int January { get; set; }
        [JsonProperty("Feb")]
        public int Feb { get; set; }
        [JsonProperty("Mar")]
        public int Mar { get; set; }
        [JsonProperty("April")]
        public int April { get; set; }
        [JsonProperty("May")]
        public int May { get; set; }
        [JsonProperty("June")]
        public int June { get; set; }
        [JsonProperty("July")]
        public int July { get; set; }
        [JsonProperty("August")]
        public int August { get; set; }
        [JsonProperty("September")]
        public int September { get; set; }
        [JsonProperty("October")]
        public int October { get; set; }
        [JsonProperty("November")]
        public int November { get; set; }
        [JsonProperty("December")]
        public int December { get; set; }
        [JsonProperty("Total")]
        public int Total { get; set; }
        [JsonProperty("CAT")]
        public string CAT { get; set; }
        [JsonProperty("UpdatedBy")]
        public string UpdatedBy { get; set; }
        [JsonProperty("UpdatedMonth")]
        public DateTime UpdatedMonth { get; set; }
    }
}
