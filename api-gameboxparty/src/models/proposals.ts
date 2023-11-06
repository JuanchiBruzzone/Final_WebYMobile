import mongoose from "mongoose";

const ProposalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
    activities: [{ ref: 'Activity', type: mongoose.Schema.Types.ObjectId }],
}, {
    timestamps: true,
    versionKey: false,
});

const ProposalModel = mongoose.model('Proposal', ProposalSchema);

export const getProposals = () => ProposalModel.find();
export const getProposalById = (id: string) => ProposalModel.findById(id);
export const getProposalsByIds = (ids: mongoose.Types.ObjectId[]) => ProposalModel.find({ _id: { $in: ids } });
export const createProposal = (values: Record<string, any>) => new ProposalModel(values).save().then((Proposal) => Proposal.toObject());;
export const deleteProposalById = (id: string) => ProposalModel.findByIdAndDelete(id);
export const updateProposalById = (id: string, values: Record<string, any>) => ProposalModel.findByIdAndUpdate(id, values, { new: true });
